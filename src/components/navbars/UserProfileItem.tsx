import './UserProfileItem.css'

export default function UserProfileItem() {
    const data = {
      userName: "Ali Özcan",
      branch: "İstanbul Anadolu Bölgesi",
      address: "Kadıköy 11, Perakende Şube, BPY",
    };
  return (
    <>
      <span className="user-profile">
        <span className="user-name">{data.userName}</span> -{" "}
        <span className="user-branch">{data.branch}</span>
        <br />
        <span className="user-address"> {data.address} </span>
      </span>
    </>
  );
}
