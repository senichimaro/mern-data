import { Link } from 'react-router-dom'

const Modal = ({ modalData, isModalOpen, setIsModalOpen }) => {

  const _setIsModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div className={ isModalOpen ? "modal fade show d-block" : "modal fade" } id="popupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalTitle">
                {
                  modalData.success ? 'Success operation' : `${modalData.name} Error`
                }
              </h5>
              <button onClick={() => _setIsModalOpen()} type="button" className="close" data-dismiss="modal" arial-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body d-flex justify-content-center">

              {
                modalData.success
                ? <SuccessComponent  modalData={modalData.data} />
                : <ErrorComponent  modalData={modalData.data} />
              }

            </div>

            <div className="modal-footer">
              {/*
                <Link onClick={() => _setIsModalOpen()} className="btn btn-secondary">Close</Link>
              */}
              <Link to="/" className="btn btn-primary">Save</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}


function ErrorComponent({ name, message }){
  console.log("ErrorComponent");
  return (
    <div className="shadow-sm rounded w-50">

      <div className="card-body">

        <h5 className="card-title">
          {
            name
              ? name
              : 'Error Unknown'
          }
        </h5>

        <p className="card-text">
          {
            message
            ? message
            : 'Message Unknown'
          }
        </p>

      </div>

    </div>
  )
}


// function SuccessComponent({ imgUrl, title, body, tags, keywords }){
function SuccessComponent({ modalData }){
  console.log("SuccessCom", modalData);
  return (
    <div className="shadow-sm rounded w-50">

      {
        modalData.imgUrl
        ? <img src={modalData.imgUrl} className="card-img-top" alt={modalData.title} />
        : 'No Image'
      }
      <div className="card-body">

        <h5 className="card-title">
          {
            modalData.title ?
              modalData.title.length > 20
              ? `${modalData.title.substring(0,20)}...`
              : modalData.title
            : 'No Title'
          }
        </h5>

        <p className="card-text">
          {
            modalData.body
            ? `${modalData.body.substring(0,100)}...`
            : 'No Text'
          }
        </p>

      </div>

    </div>
  )
}



export default Modal
