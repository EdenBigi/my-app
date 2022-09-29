
import './footer.css'

type Props = {
    theFooterArr: { displayStr: string, hrefStr: string }[],
    titleStr: string,
}

const Footer: React.FC<Props> = ({ theFooterArr, titleStr }) => {

    return (

        <div className="Footer">
            <div className="title">{titleStr}</div>
            <ul className="footerItemUL">
                {theFooterArr.map((curr, i) => (
                    <li key={i}><a href={curr.hrefStr}>{curr.displayStr}</a></li>
                ))}
            </ul>
        </div>

    )
}

export default Footer;