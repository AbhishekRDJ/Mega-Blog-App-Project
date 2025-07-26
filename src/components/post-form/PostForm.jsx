import React, { useCallback } from 'react'
import { Button, Input, Select, RTE } from '../index';
import { useForm } from 'react-hook-form';
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function PostForm({ Post = {} }) {

    const navigate = useNavigate();
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: Post?.title || "",
            slug: Post?.slug || "",
            content: Post?.content || "",
            featureImage: Post?.featureImage || "",
            Status: Post?.Status || "draft"

        }
    })
    const userData = useSelector((state) => state.auth?.userData);
    const onSubmit = async (data) => {

        if (Post?.$id) {
            const file = data.image[0] ? service.uploadFile(data.image[0]) : null
            if (file) {
                service.deleteFile(data.featureImage)
            }
            const DbData = await service.updatePost(Post.$id, {
                ...data,
                featureImage: file ? file.$id : undefined,

            })
            if (DbData) {
                navigate(`/post/${DbData.$id}`)
            }

        }
        else {
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null
            if (file) {
                data.featureImage = file.$id
                const DbPost = await service.createPost({
                    ...data,
                    userId: userData.$id
                })
                if (DbPost) {
                    navigate(`/post/${DbPost.$id}`)
                }
            }
        }
    }
    const SlugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            const slug = value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            setValue('slug', slug);
            return slug;
        }
        else {
            return '';
        }

    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                SlugTransform(value.title, {
                    shouldValidate: true,
                });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, SlugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
            <div className="px-2 w-2/3">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", SlugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="px-2 w-1/3">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !Post?.$id })}
                />
                {Post && Post.featureImage && (
                    <div className="mb-4 w-full">
                        <img
                            src={service.getFileURL(Post.featuredImage)}
                            alt={Post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("Status", { required: true })}
                />
                <Button onClick={handleSubmit(onSubmit)} type="submit" bgColor={Post ? "bg-green-500" : undefined} className="w-full h-10">
                    {Post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm