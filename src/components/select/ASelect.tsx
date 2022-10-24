import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

export interface ASelectSourceItem {
  label: string;
  value: any;
}
interface IASelectProps {
  selected?: any,
  onSelected?(value: any): void
  dataSource: ASelectSourceItem[],
  label?: string,
  sx?: any
}
export default function ASelect(props: IASelectProps) {
  const { selected, onSelected, label, dataSource, sx } = props;
  const [value, SetValue] = useState(selected);
  const handleChange = (event: SelectChangeEvent) => {
    SetValue(event.target.value);
    onSelected && onSelected(event.target.value);
  };

  return (
    <Select
      value={value}
      label={label}
      onChange={handleChange}
      size="small"
      sx={{ width: "100%", ...sx}}
    >
      {dataSource.map((item: ASelectSourceItem, index) => {
        return (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        );
      })}
    </Select>
  );
}

ASelect.defaultProps = {
  dataSource: []
}