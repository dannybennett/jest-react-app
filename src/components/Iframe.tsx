import ILink from "../types/link.type";

// you could also cast it as { link: string }
function Iframe({ link }: ILink) {
  return (
    <div>
      <iframe src={link ?? ''} width={400} height={400}></iframe>
    </div>
  );
}

export default Iframe;