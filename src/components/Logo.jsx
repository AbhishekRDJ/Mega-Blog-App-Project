// components/Logo.jsx
export default function Logo({ widthprops = "100px" }) {
    return (
        <div className={`text-2xl font-bold text-gray-800`} style={{ width: widthprops }}>
            Blog App
        </div>
    );
}
