import "./Rate.css"

const Rate = ({img}) => {
  return (
    <div id='rate'>
        <div className="person">
            <div className="rate-img-container">
                <img className="rate-img" src={img} alt="person img"/>
            </div>
            <h5 className="rate-name">Rabil Ibraiel</h5>
        </div>
        <p className="rate-rating">Lorem inpusmfdsafjd fjdlsa fjdsa fljdsaj fd ksafjdksa;fljdsja fkl;afdasfdasfd safds af dasf dsafdsafdsfadsaf.</p>
    </div>
  )
}

export default Rate