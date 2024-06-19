function Iframe({ link }: { link: string }) {
  return (
    <div>
      <iframe src={link} width={400} height={400}></iframe>
    </div>
  );
}

export default Iframe;