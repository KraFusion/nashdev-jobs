import "whatwg-fetch";

function getAllCompanies(payload) {
  return {
    type: "COMPANIES_FETCH_ALL",
    payload
  };
}

function getCompany(payload) {
  return {
    type: "COMPANIES_FETCH_ONE",
    payload
  };
}

export function fetchAll() {
  return (dispatch, state) => {
    fetch("/api/companies", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(payload => {
        dispatch(getAllCompanies(payload));
      });
  };
}

export function addCompany(data) {
  return (dispatch, state) => {
    console.log("data", data);
    fetch("/api/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(payload => {
        dispatch(getCompany(payload));
      });
  };
}
