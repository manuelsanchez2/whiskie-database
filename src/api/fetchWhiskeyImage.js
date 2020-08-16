export default async function fetchWhiskeyImage() {
  const whiskyListImages = [];
  let i = 1;
  while (i < 10) {
    console.log(i);
    const response = await fetch(
      `https://evening-citadel-85778.herokuapp.com:443/whiskey/?page=${i}`
    );
    if (!response.ok) {
      throw new Error(response);
    }
    const data = await response.json();
    console.log(data.results.reviews.comparables);
    whiskyListImages.push(...data.results.reviews.comparables);
    i++;
  }
  console.log(whiskyListImages);
  const whiskieImages = whiskyListImages.map((whiskieImage) => ({
    list_img_url: whiskieImage.comparables.list_img_url,
  }));
  return whiskieImages;
}
