function handleThumbnailClicks() {
  $(".thumbnail").on("click", (e) => {
    const imageChange = $(e.currentTarget).find("img").attr("src");
    const altChange = $(e.currentTarget).find("img").attr("alt");

    $(".hero img").attr("src", imageChange).attr("alt", altChange);
  });
}

$(handleThumbnailClicks);
