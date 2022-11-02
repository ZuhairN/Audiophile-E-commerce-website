export default function LightBox({ isExpanded, collapse }) {
    return (
        <div className={`LightBox ${isExpanded ? 'active' : ''}`} onClick={collapse}></div>
    )
}
