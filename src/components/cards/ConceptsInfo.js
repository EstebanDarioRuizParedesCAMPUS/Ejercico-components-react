function ConceptsInfo({info}) {
    return (
        <li className="concept">
          <img src={info.image} alt={info.image} />
          <h2>{info.title}</h2>
          <p>{info.description}</p>
        </li>
    );
  }
  
  export default ConceptsInfo;