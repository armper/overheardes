package com.perea.overheard.repository.search;

import com.perea.overheard.domain.OverheardComment;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link OverheardComment} entity.
 */
public interface OverheardCommentSearchRepository extends ElasticsearchRepository<OverheardComment, Long> {
}
