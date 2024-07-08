
const ManageInventoryComponent = () => {
    return (
        <div className="manage-Inventory">
            <h1>Manage Inventory</h1>
            <div className="manage-invertory-content">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="d-flex align-items-center " style={{
                            borderRight: "3px solid #7474744D"
                        }}>

                            <span>Filters:</span>
                            <div className="d-flex align-items-center gap-4 Filters-content">

                                <p>Status:</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        All
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center ">

                            <div className="d-flex align-items-center gap-4 Filters-content">
                                <p>Fulfilment By:</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                                        All
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                                        Emartech
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault6">
                                        Merchant
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ManageInventoryComponent