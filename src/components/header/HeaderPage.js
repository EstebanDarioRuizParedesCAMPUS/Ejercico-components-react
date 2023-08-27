function HeaderPage({Hdata}) {
  return (
      <header>
        <img src={Hdata.srcImg} alt={Hdata.altInfo} />
        <h1>{Hdata.h1Info}</h1>
        <p>{Hdata.paragraptInfo}</p>
      </header>
  );
}

export default HeaderPage;
