import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server
    return axios.create({
      baseURL: 'http://ingress-nginx.kube-system.svc.cluster.local',
      headers: req.headers
    });
  } else {
    // we must be on the browser
    return axios.create({
      baseURL: '/'
    });
  }
}