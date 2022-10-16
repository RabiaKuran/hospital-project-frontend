import { ColorPalette } from "../../theme/ColorPalette";

interface IALink{
  link?: string;
  img?: string,
  color?: ColorPalette;
  style?: any;
  fontSize?: string;

}

ALink.defaultProps={
  color:ColorPalette.orange,
  fontSize: "larger"
}

export default function ALink(props: IALink) {
  const { link, style, img } = props;

  return (
    <div style={{textAlign: "center"}}>
     <a style={style} href= {link}> <img style={style} src={img} alt="" /> </a>
    </div>
  )
}
