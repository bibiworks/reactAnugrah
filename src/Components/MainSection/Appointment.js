import React from "react";

function Appointment() {
  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container">
        <div className="section-title" style={{ margin: "auto", width: "50%" }}>
          <h2>Make an Appointment</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <form
          action="forms/appointment.php"
          method="post"
          role="form"
          className="php-email-form"
        >
          <div
            className="rd-flex flex-row justify-content-center"
            style={{ margin: "auto", width: "30%", paddingBottom: "1em" }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div className="validate"></div>
            </div>
            <div className="form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Make an Appointment</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
