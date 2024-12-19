import { Divider, type MenuProps } from "antd";
import Dropdown, { type DropdownProps } from "antd/es/dropdown/dropdown";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { IconButton } from "@/components/icon";
import { useLoginStateContext } from "@/pages/sys/login/providers/LoginStateProvider";
import { useRouter } from "@/router/hooks";
import { useUserActions, useUserInfo } from "@/store/userStore";
import { useThemeToken } from "@/theme/hooks";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

/**
 * Account Dropdown
 */
export default function AccountDropdown() {
  const { replace } = useRouter();
  const { username, email, avatar, ...user } = useUserInfo();
  console.log({ user, avatar });
  const { clearUserInfoAndToken } = useUserActions();
  const { backToLogin } = useLoginStateContext();
  const { t } = useTranslation();
  const logout = () => {
    try {
      clearUserInfoAndToken();
      backToLogin();
    } catch (error) {
      console.log(error);
    } finally {
      replace("/login");
    }
  };

  const { colorBgElevated, borderRadiusLG, boxShadowSecondary } =
    useThemeToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
  };

  const dropdownRender: DropdownProps["dropdownRender"] = (menu) => (
    <div style={contentStyle}>
      <div className="flex flex-col items-start p-4">
        <div>{username}</div>
        <div className="text-gray">{email}</div>
      </div>
      <Divider style={{ margin: 0 }} />
      {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
    </div>
  );

  const items: MenuProps["items"] = [
    {
      label: <NavLink to={HOMEPAGE}>{t("sys.menu.dashboard")}</NavLink>,
      key: "1",
    },
    {
      label: (
        <NavLink to="/management/user/account">
          {t("sys.menu.user.profile")}
        </NavLink>
      ),
      key: "2",
    },
    {
      label: <NavLink to="/management/system/user">Users</NavLink>,
      key: "3",
    },
    { type: "divider" },
    {
      label: (
        <button className="font-bold text-warning" type="button">
          {t("sys.login.logout")}
        </button>
      ),
      key: "4",
      onClick: logout,
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      dropdownRender={dropdownRender}
    >
      <IconButton className="h-10 w-10 transform-none px-0 hover:scale-105">
        <img
          className="h-8 w-8 rounded-full"
          src={`http://localhost:8080/api/upload/files/${avatar}`}
          alt=""
        />
      </IconButton>
    </Dropdown>
  );
}
