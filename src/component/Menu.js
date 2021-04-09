import React from "react";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src="https://img.icons8.com/bubbles/50/000000/flag-person-male.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">ระบบสมาชิก</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item ">
              <a href="/" className="nav-link">
                <img src="https://img.icons8.com/fluent/25/000000/double-right.png" />
                <p className="text-dark" style={{ fontSize: 25 }}>
                  &emsp;User
                </p>
              </a>
            </li>
            <li className="nav-item ">
              <a href="http://suphachok-manage.ml/login/" className="nav-link">
                <img src="https://img.icons8.com/fluent/25/000000/double-right.png" />
                <p className="text-dark" style={{ fontSize: 25 }}>
                  &emsp;Login
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
