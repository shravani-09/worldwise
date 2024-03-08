import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  console.log(setSearchParam);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map lat:{lat} and lng:{lng}
    </div>
  );
}

export default Map;
