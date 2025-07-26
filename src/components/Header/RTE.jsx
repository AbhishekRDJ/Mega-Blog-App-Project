import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';


export default function RTE({ name, control, label,
    defaultValue = "" }) {
    return (
        <div>
            {label && (
                <label className="block mb-1 font-medium text-gray-700 text-sm">
                    {label}
                </label>
            )}
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        apiKey="f54g6apmdwufatoip9wcbzwq2kys7aj3qv57jbw5zmly278f"
                        value={value}
                        onEditorChange={onChange}
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                )}
            />
        </div>
    )
}
