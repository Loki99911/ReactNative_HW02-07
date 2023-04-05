import { storage } from "../firebase/config";

// функция для загрузки изображения
async function uploadImage(imageUri, uid) {
  const response = await fetch(imageUri);
  const blob = await response.blob();
  const filename = `${uid}-${new Date().getTime()}`;
  const ref = storage.ref().child(`images/${uid}/avatar/${filename}`);
  await ref.put(blob);

  const url = await ref.getDownloadURL();
  return url;
}

export default uploadImage;
// вызов функции для загрузки изображения
// const imageUrl = await uploadImage("file:///path/to/image");
