import type { PageServerLoad } from "./$types";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import type { Blurb } from "$lib/types/blurb";
import { firebaseConfig } from "$lib/firebaseConfig";

export const load: PageServerLoad = async ({ params }) => {
  const firebase = initializeApp(firebaseConfig);

  const querySnap: QuerySnapshot = await getDocs(
    query(collection(getFirestore(firebase), "blurbs")),
  );

  let blurbs: Blurb[] = [];

  querySnap.forEach((doc) => {
    blurbs.push({
      blurb: doc.data().blurb,
      created_at: doc.data().created_at.toDate(),
    });
  });

  return {
    blurbs: [...blurbs].sort(
      (a, b) => b.created_at.getTime() - a.created_at.getTime(),
    ),
  };
};
