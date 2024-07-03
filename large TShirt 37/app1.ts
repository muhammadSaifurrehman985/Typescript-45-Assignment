function make_shirt(
  size: string = "large",
  textOnShirt: string = "I love typescript"
) {
  console.log(
    `Your size is ${size} and this is the text or message :${textOnShirt}`
  );
}

make_shirt("large");
make_shirt("medium");
make_shirt("small", "java is also  good");
