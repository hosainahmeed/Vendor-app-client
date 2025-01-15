import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import Swal from "sweetalert2";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address!",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "Thank you for subscribing to our newsletter.",
    });
    setEmail(""); // Reset the input field after subscribing
  };

  return (
    <div className="max-w-screen-xl border-t-2 border-b-2 py-12 p-2 rounded-md px-4 my-12 mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-bold">Sign Up For Newsletter</h3>
        <p>We'll never share your email address with a third-party.</p>
      </div>
      <Form
        layout="inline"
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-auto"
      >
        <Input.Group compact className="w-full">
          <Input
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            size="large"
            style={{ width: "calc(100% - 120px)" }}
            className="w-full"
          />
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "green",
              borderColor: "green",
            }}
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
        </Input.Group>
      </Form>
    </div>
  );
}

export default Newsletter;
