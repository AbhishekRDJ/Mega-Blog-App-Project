
export default function Logo({ widthprops = "100px" }) {
    return (
        <div className={`text-2xl font-bold text-gray-800 cursor-pointer`} style={{ width: widthprops }} onClick={() => window.location.href = '/'}>
            <img src="logo2.png" alt="" className="max-w-50 max-h-50" />
        </div>
    );
}
