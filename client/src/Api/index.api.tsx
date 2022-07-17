import useLoginApi from "./authentication/login.api";
import useVerifyApi from "./authentication/verify.api";
import useDeleteVarenikApi from "./form/deleteVarenik.api";
import useGetVarenikApi from "./form/getVareniki.api";
import useSendVarenikApi from "./form/sendVarenik.api";

export function api() {
     return { useVerifyApi, useLoginApi, useGetVarenikApi, useSendVarenikApi, useDeleteVarenikApi };
}
