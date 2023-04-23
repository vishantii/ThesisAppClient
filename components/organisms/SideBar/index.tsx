import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogOut = () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Transactions"
            icon="ic-menu-transaction"
            active={activeMenu === "transactions"}
            href="/member/transactions"
          />
          <MenuItem
            title="Settings"
            icon="ic-menu-setting"
            active={activeMenu === "settings"}
            href="/member/edit-profile"
          />
          <MenuItem title="Home" icon="ic-menu-card" href="/" />
          <MenuItem title="Log Out" icon="ic-menu-logout" onClick={onLogOut} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
