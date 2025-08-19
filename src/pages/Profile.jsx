import React from "react";

export default function Profile() {
  return (
    <section className="panel">
      <h2 className="header">Profile</h2>
      <div className="profile">
        <img
          className="avatar"
          src="https://cdna.artstation.com/p/assets/images/images/032/068/498/small/julie-shuploc-damgaard-sherlsherl.jpg?1605382489"
          alt="Sherlock Holmes"
        />
        <div>
          <div style={{ fontSize: "18px", fontWeight: 700 }}>Sherlock Holmes</div>
          <div className="field">sher@locked.com</div>
          <div className="field">Joined: 23 Jul 2025</div>
        </div>
      </div>
    </section>
  );
}
