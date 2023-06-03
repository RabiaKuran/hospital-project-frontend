import { useEffect, useState } from "react";
import { Table, Input, Typography, Form, InputNumber, Popconfirm } from "antd";
import "./table.css";
import type { SorterResult } from "antd/es/table/interface";
import type { TableProps } from "antd";
import PatientsService from "../../../services/patients/PatientsService";
import { useTableSearch } from "../../../components/search/useTableSearch";
import { ColorPalette } from "../../../theme/ColorPalette";
import ALoadingCard from "../../../components/cards/ALoadingCard";
import ACard from "../../../components/cards/ACard";
import ACardInfoButton from "../../../components/cards/ACardInfoButton";
import {
  CloseIcon,
  SaveIcon,
  DriveFileRenameOutlineIcon,
} from "../../../components/icons/Icon";

interface Item {
  id: number;
  radSoyad: string;
  adSoyad: string;
  cadSoyad: string;
  yatisSebebi: string;
  odaNo: string;
  birthDate: string;
  telefon: number;
  girisTarihi: string;
}

const fetchUsers = async () => {
  const { data } = await PatientsService.getPatients();
  console.log("fetchUsers");
  console.log(data);
  console.log("fetchUsers");
  return { data };
};
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default function PatientsCard() {
  const [dataSource, setDataSource] = useState<any>();
  const [ldng, setLdng] = useState(true);
  const [searchVal, setSearchVal] = useState();
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record: Item) => record?.id?.toString() === editingKey;
  const [sortedInfo, setSortedInfo] = useState<SorterResult<Item>>({});
  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers,
  });
  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      var data = await PatientsService.getPatients();
      setDataSource(data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLdng(false);
    }
  };
  if (ldng) return <ALoadingCard />;
  const save = async (id: React.Key) => {
    try {
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const edit = (record: Partial<Item> & { id: React.Key }) => {
    form.setFieldsValue({ yatisSebebi: "", ...record });
    setEditingKey(record?.id.toString());
  };

  const cancel = () => {
    setEditingKey("");
  };
  const clearAll = () => {
    setSortedInfo({});
  };
  const handleChange: TableProps<Item>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<Item>);
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "id",
    });
  };

  const userColumns = [
    {
      title: "Hasta Id",
      dataIndex: "id",
      key: "id",
      width: "5%",
      sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
    },
    {
      title: "Refakatçi Adı",
      dataIndex: "radSoyad",
      key: "radSoyad",
      width: "10%",
      editable: true,
      sorter: (a: { radSoyad: string }, b: { radSoyad: string }) =>
        a.radSoyad.length - b.radSoyad.length,
      sortOrder: sortedInfo.columnKey === "radSoyad" ? sortedInfo.order : null,
    },

    {
      title: "Hasta Ad Soyad",
      dataIndex: "adSoyad",
      key: "adSoyad",
      width: "15%",
      editable: true,
      sorter: (a: { adSoyad: string }, b: { adSoyad: string }) =>
        a.adSoyad.length - b.adSoyad.length,
      sortOrder: sortedInfo.columnKey === "adSoyad" ? sortedInfo.order : null,
    },
    {
      title: "Çalışan Ad Soyadı",
      dataIndex: "cadSoyad",
      key: "cadSoyad",
      width: "15%",
      editable: true,
      sorter: (a: { cadSoyad: string }, b: { cadSoyad: string }) =>
        a.cadSoyad.length - b.cadSoyad.length,
      sortOrder: sortedInfo.columnKey === "cadSoyad" ? sortedInfo.order : null,
    },

    {
      title: "Yatış Sebebi",
      dataIndex: "yatisSebebi",
      key: "yatisSebebi",
      width: "10%",
      editable: true,
      sorter: (a: { yatisSebebi: string }, b: { yatisSebebi: string }) =>
        a.yatisSebebi.length - b.yatisSebebi.length,
      sortOrder:
        sortedInfo.columnKey === "yatisSebebi" ? sortedInfo.order : null,
    },
    {
      title: "Oda Numara",
      dataIndex: "odaNo",
      key: "odaNo",
      width: "5%",
      editable: true,
      sorter: (a: { odaNo: string }, b: { odaNo: string }) =>
        a.odaNo.length - b.odaNo.length,
      sortOrder: sortedInfo.columnKey === "odaNo" ? sortedInfo.order : null,
    },
    {
      title: "Doğum Tarihi",
      dataIndex: "birthDate",
      key: "birthDate",
      width: "10%",
      editable: true,
      sorter: (a: { birthDate: string }, b: { birthDate: string }) =>
        a.birthDate.length - b.birthDate.length,
      sortOrder: sortedInfo.columnKey === "birthDate" ? sortedInfo.order : null,
    },
    {
      title: "Telefon Numarası",
      dataIndex: "telefon",
      key: "telefon",
      width: "10%",
      editable: true,
      sorter: (a: { telefon: number }, b: { telefon: number }) =>
        a.telefon - b.telefon,
      sortOrder: sortedInfo.columnKey === "telefon" ? sortedInfo.order : null,
    },

    {
      title: "Giriş Tarihi",
      dataIndex: "girisTarihi",
      key: "girisTarihi",
      width: "10%",
      editable: true,
      sorter: (a: { girisTarihi: string }, b: { girisTarihi: string }) =>
        a.girisTarihi.length - b.girisTarihi.length,
      sortOrder:
        sortedInfo.columnKey === "girisTarihi" ? sortedInfo.order : null,
    },
    {
      title: "Edit",
      dataIndex: "operation",
      width: "10%",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>
                <CloseIcon sx={{ color: ColorPalette.red }}></CloseIcon>
              </a>
            </Popconfirm>
            <Typography.Link
              onClick={() => save(record.id.toString())}
              style={{ marginLeft: 10 }}
            >
              <SaveIcon sx={{ color: ColorPalette.greenn }}></SaveIcon>
            </Typography.Link>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
            style={{ marginLeft: 12 }}
          >
            <DriveFileRenameOutlineIcon sx={{ color: ColorPalette.greenn }} />
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = userColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <ACard className="table">
      <ACardInfoButton
        text={"Hastalar Listesi"}
        onChange={(e: any) => setSearchVal(e.target.value)}
      ></ACardInfoButton>
      <Form form={form} component={false}>
        <Table
          className="table"
          rowKey="name"
          dataSource={filteredData}
          columns={mergedColumns}
          loading={loading}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
          bordered
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          onChange={handleChange}
        ></Table>
      </Form>
    </ACard>
  );
}
