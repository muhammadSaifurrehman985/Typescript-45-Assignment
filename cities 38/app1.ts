function describe_city(city: string, contry: string = "Pakistan") {
  console.log(`${city} is in ${contry}`);
}

describe_city("Karachi");
describe_city("Islamabad");
describe_city("Shahdadpur");

describe_city("toronto", "Canada");
describe_city("Palm al Jumairah", "Dubai");
