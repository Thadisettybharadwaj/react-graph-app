interface ImageQueueItem {
  id: number | string;
  image: string;
}

type ImageMap = Map<number | string, HTMLImageElement>;

export const syncLoadAllImages = (
  imageQueue: ImageQueueItem[],
  callback: (imageMap: ImageMap) => void
): void => {
  const numAll = imageQueue.length;
  let numProcessed = 0;
  const allImages: ImageMap = new Map();

  if (numAll === 0) {
    callback(allImages);
    return;
  }

  imageQueue.forEach((item) => {
    const image = new Image();
    const id = item.id;

    image.addEventListener("load", () => {
      numProcessed++;
      allImages.set(id, image);
      if (numAll === numProcessed) {
        callback(allImages);
      }
    });

    image.addEventListener("error", () => {
      numProcessed++;
      if (numAll === numProcessed) {
        callback(allImages);
      }
    });

    image.src = item.image;
  });
};
