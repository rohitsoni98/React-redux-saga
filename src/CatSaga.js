import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsFetch, getCatsSuccess } from "./CatSlice";

function* getFetch() {
	const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
	const fromattedCats = yield cats.json();
	const result = fromattedCats.slice(0, 10);

	yield put({ type: getCatsSuccess, payload: result });
}
// getCatsSuccess(result)

function* catSaga() {
	yield takeEvery(getCatsFetch, getFetch);
}

export default catSaga;
