import { initializeApp } from "firebase/app";
import type { PageServerLoad } from "./$types";
import { firebaseConfig } from "$lib/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  type QuerySnapshot,
} from "firebase/firestore";
import type { Project } from "$lib/types/project";

export const load: PageServerLoad = async ({ params }) => {
  const firebase = initializeApp(firebaseConfig);

  const querySnap: QuerySnapshot = await getDocs(
    query(collection(getFirestore(firebase), "projects")),
  );

  let projects: Project[] = [];

  querySnap.forEach((doc) => {
    const docData = doc.data();
    projects.push({
      name: docData.name,
      description: docData.description,
      release: docData.release.toDate(),
      link: docData.link,
      source: docData.source,
      languages: docData.languages,
    });
  });

  return {
    projects: [...projects].sort(
      (a, b) => b.release.getTime() - a.release.getTime(),
    ),
  };
};
