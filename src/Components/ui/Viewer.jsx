function Viewer({ imgUrl, setOpen }) {
  return (
    <div id="viewer" onClick={() => setOpen(false)}>
      <img src={imgUrl} alt="hombozo" />
    </div>
  );
}

export default Viewer;
