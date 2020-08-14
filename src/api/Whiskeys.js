export async function fetchWhiskeys() {
  const response = await fetch(
    "https://evening-citadel-85778.herokuapp.com:443/whiskey/27"
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const data = await response.json();
  const whiskeys = data.results.map((whiskey) => ({
    title: whiskey.title,
    description: whiskey.description,
    id: whiskey.id,
    img_url: whiskey.img_url,
    price: whiskey.price,
    rating: whiskey.rating,
    region: whiskey.region,
  }));

  return whiskeys;
}
