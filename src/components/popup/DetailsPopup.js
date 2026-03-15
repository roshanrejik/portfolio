import Popup from "./Popup";
const DetailsPopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="" style={{marginBottom: 20  }}>
          <img src={data.src} alt="" height={100} />
          {/* <div
            className="main"
            data-img-url="img/portfolio/4.jpg"
            style={{ backgroundImage: 'url("img/portfolio/4.jpg")' }}
          /> */}
        </div>
        <div className="portfolio_main_title">
          <h3>{data.projectName}</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Details
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              {data.description}
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">FrontEnd</span>
                <span>{data.frontend}</span>
              </li>
              <li>
                <span className="first">BackEnd</span>
                <span>
                 {data.backend}
                </span>
              </li>
              <li>
                <span className="first">Database</span>
                <span>{data.database}</span>
              </li>
              <li>
                <span className="first">Authentication</span>
                <span>{data.authentication}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
        <h3>Deliverables</h3>
            <ul style={{marginLeft: 20}}>
              {data.deliverables?.map((item, index) => 
              <li key={index}>
                <span>{item}</span>
              </li>
              )}
              </ul>
              </div>
        {/* <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/1.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/2.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/3.jpg" />
                </div>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </Popup>
  );
};
export default DetailsPopup;
