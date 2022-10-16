import CardHeader from "@mui/material/CardHeader";
import { InfoOutlinedIcon } from "../icons/Icon";
import "./ACardHeader.css";

interface IACardHeaderProps {
  title: string;
  action?: any;
  sx?: any;
  rightTitle?: any;
  showRightTitleIcon?: boolean;
  onRightTitleIconClick?: () => void;
  rightComponent?: any;
}

export default function ACardHeader(props: IACardHeaderProps) {
  const {
    title,
    action,
    sx,
    rightTitle,
    showRightTitleIcon,
    onRightTitleIconClick,
    rightComponent
  } = props;
  const getRightComponent = () => {
    return (
      <span className="a-header-right">
        {rightComponent && rightComponent}
        <span className="a-header-right-title">
          {rightTitle}
          {showRightTitleIcon && (
            <InfoOutlinedIcon
              onClick={onRightTitleIconClick}
            ></InfoOutlinedIcon>
          )}
        </span>
      </span>
    );
  };

  return (
    <CardHeader
      title={title}
      sx={{ padding: 1, ...sx }}
      action={action}
      subheader={getRightComponent()}
      className="a-card-header"
    ></CardHeader>
  );
}

ACardHeader.defaultProps = {
  rightTitle: "",
};
