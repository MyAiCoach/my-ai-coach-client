// Şu anki günü alacak fonksiyon
const getCurrentDay = (): number => {
  // Şu anki tarih ve zamanı al
  const currentDate: Date = new Date();

  // Haftanın gününü indeks numarasına dönüştür
  let dayIndex: number = currentDate.getDay();

  // Pazartesi günü 1 olarak atanır (JavaScript'de pazartesi 0'dan başlar)
  // Bu nedenle Pazartesi gününe karşılık gelen 0 değeri için özel bir işlem yapacağız.
  if (dayIndex === 0) {
    dayIndex = 7; // Pazartesi günü 1 olarak atanır
  }

  return dayIndex;
};

// Metodu varsayılan olarak dışa aktar
export default getCurrentDay;
