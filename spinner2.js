let time = 100;
const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ','\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, time += 200);
}