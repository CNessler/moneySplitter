function validate() {
  if ($("#totalAmount").val() === "" || $("#splitCount").val() === "") {
    alert("A total amount and number of people to split by are required");
    return;
  }
}
