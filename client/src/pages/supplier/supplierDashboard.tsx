import Widgets from "@/components/common/Widgets";
import Chart from "@/components/supplierComponent/chart";
import TableComponent from "@/components/supplierComponent/table.component";
import { LineChart } from "@mui/x-charts/LineChart";
import image from "../../assets/images/Vector-img.svg";
import "../../components/supplierStyle.scss";
import { SupplierWrapper } from "./supplierWrapper";

export const SupplierDashboard = () => {
  const tableData = [
    {
      Referance: "CUK-21500031-COC",
      Date: "19/03/2024 18:51:59",
      Amount: "AED 1,225.09",
      Payment: "VISA",
      Status: "Shipped"
    },
    {
      Referance: "CUK-21500031-COC",
      Date: "19/03/2024 18:51:59",
      Amount: "AED 1,225.09",
      Payment: "VISA",
      Status: "Shipped"
    }
  ];

  const columns = [
    { header: "Reference", accessor: "Referance" },
    { header: "Date", accessor: "Date" },
    { header: "Amount", accessor: "Amount" },
    { header: "Payment", accessor: "Payment" },
    { header: "Status", accessor: "Status" }
  ];

  const widgetsData = [
    [
      {
        icon: "material-symbols:orders-outline-rounded",
        label: "Sales",
        value: 245,
        unit: "This Month",
        additionalContent: (
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], colorMap: { type: 'piecewise', thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)], colors: ['#000'] } }]}
            series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
            width={300}
            height={100}
          />
        )
      }
    ],
    [
      {
        icon: "mynaui:users",
        label: "Message",
        value: 10,
        unit: "New",
        showArrow: true
      },
      {
        icon: "material-symbols:orders-outline-rounded",
        label: "Orders",
        value: 24,
        unit: "New",
        showArrow: true
      }
    ],
    [
      {
        icon: "",
        label: "Balance",
        value: 456000,
        unit: "AED",
        Image: <img src={image} alt="img not found" />
      },
      {
        icon: "carbon:categories",
        label: "Pending Orders",
        value: 14,
        unit: "New"
      }
    ],
    [
      {
        icon: "ph:user-light",
        label: "Inventory",
        value: 45,
        unit: "New"
      }
    ]
  ];

  return (
    <SupplierWrapper>
      <>
        <Widgets widgetsData={widgetsData} />
        <Chart />
        <div className="table-content">
          <h1>Recent Orders</h1>
          <TableComponent
            tableData={tableData}
            itemsPerPage={4}
            columns={columns}
          />
        </div>
      </>
    </SupplierWrapper>
  );
};

export default SupplierDashboard;
