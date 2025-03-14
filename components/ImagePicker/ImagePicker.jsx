"use client";

import { useRef, useState } from "react";
import styles from "./imagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageRef = useRef();
  const handlePickClick = () => {
    imageRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No Images picked.</p>}
          {pickedImage && <Image src={pickedImage} alt="choosen image" fill />}
        </div>
        <input
          ref={imageRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png,image/jpeg,/image/jpg"
          name={name}
          required
          onChange={handleImageChange}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
