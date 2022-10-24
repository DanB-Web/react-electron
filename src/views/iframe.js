const EmbedPage = () => {
  return (
    <div className="embedpage">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ML743nrkMHw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbedPage;
