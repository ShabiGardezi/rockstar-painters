import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormGroup,
  Button,
  Typography,
  TextField,
  Grid,
  Container,
} from "@mui/material";
import { useRef } from "react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  service: "",
  areas: [],
  colors: {},
  paint: "", // Add paint field to initialValues
  stain: "", // Add stain field to initialValues
};

const services = ["Interior", "Exterior"];
const interiorAreas = [
  "Office/Study",
  "Living Room",
  "Entry",
  "Hallway",
  "Kitchen",
  "Master Bed",
  "Master Bath",
  "Bedroom A",
  "BathRoom A",
  "Bedroom B",
  "BathRoom B",
  "Bedroom C",
  "Laundry Room",
  "Basement",
  "Repair",
  "Dry Wall",
  "Built-IN Book Shelves",
  "Cabinets",
  "Powder Bathroom",
];

const MyForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission
  };
  const servicesSectionRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(1);

  const handleNext = () => {
    if (currentSection === 1) {
      setCurrentSection(2);
    } else if (currentSection === 2) {
      setCurrentSection(6);
      if (servicesSectionRef.current) {
        servicesSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handlePrevious = () => {
    if (currentSection === 2) {
      setCurrentSection(1);
    } else if (currentSection === 6) {
      setCurrentSection(2);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, handleBlur }) => (
        <Form>
          {/* Customer Details Section */}
          {currentSection === 1 && (
            <>
              <Typography variant="h6">Customer Details</Typography>
              <Container>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Customer Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="phone"
                      name="phone"
                      label="Phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="address"
                      name="address"
                      label="Address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="city"
                      name="city"
                      label="City"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="state"
                      name="state"
                      label="State"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="zip"
                      name="zip"
                      label="Zip"
                      value={values.zip}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                </Grid>
                <Button
                  style={{
                    marginTop: "20px",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </Container>
            </>
          )}

          {/* Services Section */}
          {currentSection === 2 && (
            <div ref={servicesSectionRef}>
              <Typography variant="h6">Services</Typography>
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={10} sm={12}>
                    <TextField
                      fullWidth
                      id="service"
                      name="service"
                      select
                      label="Service"
                      value={values.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {services.map((service) => (
                        <MenuItem key={service} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  {/* Interior Services Section */}
                  {values.service === "Interior" && (
                    <>
                      <Grid item xs={12}>
                        <FormGroup>
                          <Typography variant="h6">Interior Areas</Typography>
                          <table>
                            <thead>
                              <tr>
                                <th>Select</th>
                                <th>Area</th>
                                <th>Paint Code</th>
                                <th>Wall</th>
                                <th>Base</th>
                                <th>Ceiling</th>
                                <th>Closet</th>
                                <th>Door</th>
                              </tr>
                            </thead>
                            <tbody>
                              {interiorAreas.map((area) => (
                                <tr key={area}>
                                  <td>
                                    <Field
                                      type="checkbox"
                                      as={Checkbox}
                                      name="areas"
                                      value={area}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    />
                                  </td>
                                  <td>{area}</td>
                                  <td>
                                    <Field
                                      as={TextField}
                                      name={`colors.${area}.paintCode`}
                                      id={`${area}-paint-code`}
                                    />
                                  </td>
                                  <td>
                                    <Field
                                      as={TextField}
                                      name={`colors.${area}.wall`}
                                      id={`${area}-wall`}
                                    />
                                  </td>
                                  <td>
                                    <Field
                                      as={TextField}
                                      name={`colors.${area}.base`}
                                      id={`${area}-base`}
                                    />
                                  </td>
                                  <td>
                                    <Field
                                      as={TextField}
                                      name={`colors.${area}.ceiling`}
                                      id={`${area}-ceiling`}
                                    />
                                  </td>
                                  <td>
                                    <Field
                                      as={TextField}
                                      name={`colors.${area}.closet`}
                                      id={`${area}-closet`}
                                    />
                                  </td>
                                  <td>
                                    <Field
                                      as={TextField}
                                      name={`colors.${area}.door`}
                                      id={`${area}-door`}
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </FormGroup>
                      </Grid>
                      <Grid item xs={6} sm={12}>
                        <TextField
                          fullWidth
                          id="paint"
                          name="paint"
                          label="Paint"
                          value={values.paint}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                      <Grid item xs={6} sm={12}>
                        <TextField
                          fullWidth
                          id="stain"
                          name="stain"
                          label="Stain"
                          value={values.stain}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                    </>
                  )}
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePrevious}
                  style={{ margin: "15px" }}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </Container>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
