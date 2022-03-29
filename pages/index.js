import { db } from '../src/lib/firebaseapp'
import { collection } from 'firebase/firestore'
import { useCollection } from "react-firebase-hooks/firestore"

function homepage(){
    const [posts, postsloading, postserror] = useCollection(
        collection(db, "nftcollection"),
        {}
      )

    return (
        <div>
            <div>{process.env.NEXT_PUBLIC_FIREBASE_API_KEY}</div>
            {postserror && <strong>Error: {JSON.stringify(postserror)}</strong>}
            {postsloading && <span>Collection: Loading...</span>}      
                {posts && posts.docs.map((doc) => (
                    <div>
                        {JSON.stringify(doc.data())},{' '}
                    </div>
            ))}
        </div>
    )
}
export default homepage;