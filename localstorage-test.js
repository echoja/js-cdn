try {
  window.localStorage.setItem("it-is-test", "hello, world!");
  console.log("success!");
} catch (e) {
  console.log("failed");
  console.error(e);
}
