import ExistingProductComponent from "@/components/supplierComponent/ExistingProduct/existing-product-component";
import TableDtailComponent from "@/components/supplierComponent/ExistingProduct/table-detail-component";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";


const ExistingProduct = () => {


    return (
        <SupplierWrapper>
            <>
                <div className="Existing-Product">
                    <ExistingProductComponent />
                    <div className="input-field-data">
                        <div className="input-field">
                            <TableDtailComponent />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end gap-3 mt-3">
                        <button className="button-list Cancel-btn ">Cancel</button>
                        <button className="button-list ">Save & Finish</button>
                    </div>
                </div>


            </>
        </SupplierWrapper>
    )
}

export default ExistingProduct;