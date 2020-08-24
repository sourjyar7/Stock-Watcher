import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
class Search_Bar extends Component {
    state = {  }
    render() { 
        return ( <Form inline onSubmit={this.props.handleSearch}>
            <FormControl
              type="text"
              name="symbol"
              placeholder="Enter company name or symbol. . . ."
              className="w-75 bg-transparent font-italic"
              
            />
            <Button variant="outline-warning" className="ml-md-4 w-auto" type="submit">
              Search
            </Button>
          </Form>);
    }
}
 
export default Search_Bar;