import Link from 'next/link'
import CSS from "./SectionSelection.module.scss";


export default function SectionSelection(props) {
    
    return (
<div className={CSS.container}>
    <button className={`${CSS.prevSection} ${CSS.sectionSelector}`} on>Software Projects</button>
    <button className={`${CSS.nextSection} ${CSS.sectionSelector}`}>Animations</button>
</div>
);}