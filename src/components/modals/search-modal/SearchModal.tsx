import { RiSearchFill, RiSearchLine } from "react-icons/ri";
import { HoverableIcon } from "../../hoverable-icon";
import { SearchInputField } from "../../inputs";
import "./searchModal.css";

export default function SearchModal(): React.ReactElement {
  return <div className="search--modal">
    <SearchInputField className="search--modal-input" placeholder="Search" />
    <HoverableIcon
      hoverIcon={< RiSearchFill className="search--modal-icon" />}
      regularIcon={<RiSearchLine className="search--modal-icon" />}
    />
  </div>
}