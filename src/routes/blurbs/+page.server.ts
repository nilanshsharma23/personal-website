import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from "$env/static/private";
import type { FirebaseOptions } from "firebase/app";
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

const firebaseConfig: FirebaseOptions = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

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
      (a, b) => a.created_at.getTime() - b.created_at.getTime(),
    ),
  };
};
